function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[5px] bg-white text-[15px] border-2 border-black p-2">
      {children}
    </div>
  );
}

export default Card;
