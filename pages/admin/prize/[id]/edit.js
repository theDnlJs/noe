import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../../components/Form";
import prizeTable from "../../prize-table";
import { useUser } from "../../../../utils/auth/useUser";
import Link from "next/link";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPrize = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, logout } = useUser();
  const { data: prize, error } = useSWR(
    id ? `/api/prizes/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!prize) return <p>Loading...</p>;

  const prizeForm = {
    name: prize.name,
    desc: prize.desc,
    imgUrl: prize.imgUrl,
    quantity: prize.quantity,
    chances: prize.chances,
    smsTemplate: prize.smsTemplate
  };
if (!user) {
  return (
    <>
      <p>היי גבר</p>
      <p>
        אתה לא מחובר
        <Link href={"/auth"}>
          <a> התחבר</a>
        </Link>
      </p>
    </>
  );
}
  return (
    <>
      <Form prizeForm={prizeForm} forNewPet={false} />
    </>
  );
};

export default EditPrize;
