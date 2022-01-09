import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();

  return (
    <div>
      <h4>{router.query.title ?? "Loading..."}</h4>
      <h5>{router.query.id ?? "Loading..."}</h5>
    </div>
  );
}
