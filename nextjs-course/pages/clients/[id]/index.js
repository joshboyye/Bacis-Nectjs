import { useRouter } from "next/router";
import styles from "styles/Button.module.css";

function ClientProjectspage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.replace({
      pathname: "/clients/[id]/[clientporjectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>THe Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectspage;
