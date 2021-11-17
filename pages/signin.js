export async function getServerSideProps(context) {
  return {
    redirect: {
      // destination: "/api/auth/signin",
      destination: "/api/auth/signin?callbackUrl=/welcome",
      permanent: false,
    },
  };
}

export default function Signin() {
  return null;
}
