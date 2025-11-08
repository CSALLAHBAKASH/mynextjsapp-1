export default function Page({ params }) {
  return (
    <div>
      <h1>Speaker: {params.slug}</h1>
      <p>
        This is a dynamically routed page for speaker with slug: {params.slug}
      </p>
    </div>
  );
}
