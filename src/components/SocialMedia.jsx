import styles from "../style";
import { socialMediaLinks } from "../constants";

const SocialMedia = () => (
  <div
    className={`flex items-center justify-center md:inline list-none md:absolute bottom-[4rem] left-[16rem] after:invisible after:md:visible after:w-[1px] after:left-[10px] after:mt-[20px] after:h-[30px] after:bg-primary after:absolute`}
  >
    {socialMediaLinks.map((Item, index) => (
      <a
        key={Item.id}
        href={Item.href}
        rel="noreferrer"
        target="_blank"
        className={`${
          index !== socialMediaLinks.length - 1 ? "mr-[20px]" : "mr-0"
        } md:mr-0`}
      >
        <Item.iconType
          className={`${styles.linkStyle} md:mb-[20px] w-[25px] h-[25px] md:w-[20px] md:h-[20px]`}
        />
      </a>
    ))}
  </div>
);

export default SocialMedia;
