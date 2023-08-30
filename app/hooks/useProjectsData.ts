import { ImageSourcePropType, Linking } from "react-native";
import { ProjectList } from "../data/projectsData";
import { Asset, useAssets } from "expo-asset";
import { useEffect, useState } from "react";
import { isWeb } from "../utils/utils";

type ProjectDataType = {
  hasLoaded: boolean;
  getImage: (name: string) => Asset | undefined;
};

export const useProjectData = (): ProjectDataType => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [assets, error] = useAssets([
    require("../../assets/images/projects/bo.jpg"),
    require("../../assets/images/projects/OW_ILAX.jpg"),
    require("../../assets/images/projects/OW_credit_studio.jpg"),
    require("../../assets/images/projects/jaguar.jpg"),
    require("../../assets/images/projects/gog.png"),
    require("../../assets/images/projects/walkers.jpg"),
    require("../../assets/images/projects/earfold.jpg"),
    require("../../assets/images/projects/baxter.png"),
    require("../../assets/images/projects/wanda3.jpg"),
    require("../../assets/images/projects/twinkle1.jpg"),
    require("../../assets/images/projects/stx1.jpg"),
    require("../../assets/images/projects/exp_ninja1.jpg"),
    require("../../assets/images/projects/bc1.jpg"),
    require("../../assets/images/projects/jj1.jpg"),
    require("../../assets/images/projects/iluck1.jpg"),
    require("../../assets/images/projects/koc3.jpg"),
    require("../../assets/images/projects/muddy_1.jpg"),
    require("../../assets/images/projects/pip_mobile_1.jpg"),
    require("../../assets/images/projects/puffins_1.jpg"),
    require("../../assets/images/projects/henri3.jpg"),
    require("../../assets/images/projects/tft3.jpg"),
    require("../../assets/images/projects/dinoroar1.jpg"),
    require("../../assets/images/projects/ada1.jpg"),
    require("../../assets/images/projects/bs1.jpg"),
    require("../../assets/images/projects/sb1.jpg"),
    require("../../assets/images/projects/awa1.jpg"),
    require("../../assets/images/projects/ng1.jpg"),
    require("../../assets/images/projects/ex1.jpg"),
    require("../../assets/images/projects/bw1.jpg"),
    require("../../assets/images/projects/bj1.jpg"),
    require("../../assets/images/projects/wp1.jpg"),
    require("../../assets/images/projects/ht1.jpg"),
    require("../../assets/images/projects/jed1.jpg"),
    require("../../assets/images/projects/pp1.jpg"),
    require("../../assets/images/projects/pcake1.jpg"),
    require("../../assets/images/projects/snorts1.jpg"),
    require("../../assets/images/projects/cof1.jpg"),
    require("../../assets/images/projects/cof3.jpg"),
    require("../../assets/images/projects/lk1.jpg"),
    require("../../assets/images/projects/olly1.jpg"),
    require("../../assets/images/projects/olly_mob1.jpg"),
    require("../../assets/images/projects/mm3.jpg")
  ]);

  useEffect(
    () => {
      if (assets) {
        setHasLoaded(true);
      }
    },
    [assets]
  );

  const getImage = (name: string): Asset | undefined => {
    if (hasLoaded && assets) {
      const index = ProjectList.findIndex(project => project.project_image === name);

      return assets[index];
    }
    return;
  };

  return { getImage, hasLoaded };
};
