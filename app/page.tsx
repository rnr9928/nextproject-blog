async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      des,
      "currentUrl" : url.current
  }
  `
}


export default function Home() {
  return (
    <div>
      
      <h1>Guk page</h1>
    </div>
  );
}
