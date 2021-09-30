export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/api/auth/signout?callbackUrl=/",
      permanent: false,
    },
  };
}

export default function Signout() {
  return null;
}
