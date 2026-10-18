// ini adalah contoh components client side
"use client"; // pendefenisian ke sistem bahwa ini adalah components csr

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`user id: ${userId}`);
  return (
    <button className="btn btn-success" onClick={handleClick}>
      Klik Aku!!!
    </button>
  );
};

export default ViewUserButton;
