import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platformID: number) => void;
  selectedPlatformID?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformID }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  const selectedPlatform = usePlatform(selectedPlatformID);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
