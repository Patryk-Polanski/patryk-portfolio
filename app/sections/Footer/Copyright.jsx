const currentYear = new Date().getFullYear();

export default function Copyright() {
  return (
    <small>
      © Copyright {currentYear} by Patryk Polanski | Built with Next.js 🔥
    </small>
  );
}
