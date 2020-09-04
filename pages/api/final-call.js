import dbConnect from "../../lib/dbConnect";
import Lead from "../../models/Lead";
import Prize from "../../models/Prize";
import axios from "axios";
import FormData from "form-data";


export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    body: { data },
  } = req;
  const { leadPlayed, prizeOwn } = data;
  const prizeId = prizeOwn._id;
  const prizeDesc = prizeOwn.desc
  switch (method) {
    case "POST":
      try {
        const newLead = await new Lead({
          name: leadPlayed.name,
          phone: leadPlayed.phone,
          prize: prizeId,
        });
        newLead.save().catch((e) => console.log(e));
        await Prize.update(
          {
            _id: prizeId,
          },
          { $push: { leads: leadPlayed } }
          );
          const data = new FormData();
          data.append(
            "InforuXML",
            `<Inforu> <User>\n\n<Username>laba</Username>\n\n<Password>laba2536</Password> </User>\n<Content Type="sms">\n\n<Message>אהלן גבר, זכית ב${prizeDesc}</Message> </Content>\n<Recipients>\n\n<PhoneNumber>${newLead.phone}</PhoneNumber> </Recipients>\n<Settings>\n\n<Sender>MAINSTREAM</Sender> </Settings>\n\n</Inforu>`
            );
            const config = {
              method: "post",
              url: "http://api.inforu.co.il/SendMessageXml.ashx",
              headers: {
                Cookie:
                "FGTServer=9468952D795B117DAB0BA80749159D24806DBEE0B140EF469B7DB2DAFD7DD86E65D0E742CE1FCB",
                ...data.getHeaders(),
              },
              data: data,
            };
            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
        res.status(200).json({ newLead });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
  }
}
