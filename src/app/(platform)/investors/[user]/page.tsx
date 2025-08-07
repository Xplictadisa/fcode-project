// THIS WILL EXPORT THE INVESTORS PAGE COMPONENT
// route @ /investors/user
// dynamic route, user is dynamic

function Page() {
  return (
    <div>
      {/*page title-investors */}
      <div className="flex justify-between">
        <p>Investors</p>
        <div>
          <div className="h-8">search</div>
          <div className="h-8">date</div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Page;
