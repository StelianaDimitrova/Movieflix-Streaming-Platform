import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function SocialAccounts() {
  return (
    <>
      <a
        href="https://www.facebook.com/netflix/?locale=bg_BG"
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
      >
        <FacebookOutlinedIcon />
      </a>
      <a
        href="https://x.com/netflix"
        target="_blank"
        rel="noopener"
        aria-label="X"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/netflix/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"
        target="_blank"
        rel="noopener"
        aria-label="YouTube"
      >
        <YouTubeIcon />
      </a>
    </>
  );
}
