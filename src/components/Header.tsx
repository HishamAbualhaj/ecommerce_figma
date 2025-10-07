import AnnouncementBar from "./AnnouncementBar";

const Header = () => {
  return (
    <AnnouncementBar
      title="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
      Button={<ShopNow />}
    />
  );
};

const ShopNow = () => {
  return <div className="underline">ShopNow</div>;
};

export default Header;
