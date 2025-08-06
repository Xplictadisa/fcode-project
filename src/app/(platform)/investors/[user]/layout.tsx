// TAKES ITS SEGMENT PAGE AS CHILDREN PROPS
// ALSO WILL TAKES INVESTORS, AND MISC

type layoutProp = {
  children: React.ReactNode;
  investors: React.ReactNode;
  misc: React.ReactNode;
};

function Layout({ children }: layoutProp) {
  return (
    <div className="border-2 border-amber-500 h-full flex items-center justify-center">
      <div>{children}</div>
    </div>
  );
}

export default Layout;
