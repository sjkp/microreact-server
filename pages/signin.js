export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/api/auth/signin?callbackUrl=/my-account",
      permanent: false,
    },
  };
}

export default function Signin() {
  return null;
}
