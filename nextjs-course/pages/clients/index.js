import Link from "next/link";
function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximailian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1> The clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={clients.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }} 
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
