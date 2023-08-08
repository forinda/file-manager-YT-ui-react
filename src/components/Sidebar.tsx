import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHardDrive, faCloud } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const links = [
    {
      label: "Drive",
      link: "#",
      icon: faHardDrive,
    },
    {
      label: "Cloud",
      link: "#",
      icon: faCloud,
    },
  ];
  return (
    <div className="h-screen flex-[3] border-r p-4">
      <ul className="flex flex-col gap-2">
        {links.map(({ icon, label, link }) => {
          return (
            <li className="flex items-center gap-2 text-lg hover:underline hover:bg-neutral-400 rounded-md">
              <Link
                to={link}
                className="flex items-center gap-2 text-lg hover:underline hover:bg-neutral-400 px-2 rounded-md"
              >
                <FontAwesomeIcon icon={icon} size={"1x"} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
