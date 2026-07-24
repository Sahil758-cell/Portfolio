"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: 20, background: "#333", color: "#fff" }}>
      <h1>Something went wrong.</h1>
      <details style={{ whiteSpace: "pre-wrap" }}>{error?.message}</details>
      <button onClick={() => reset()} style={{ marginTop: 12 }}>
        Try again
      </button>
    </div>
  );
}
