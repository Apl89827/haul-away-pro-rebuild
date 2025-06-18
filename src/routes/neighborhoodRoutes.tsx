
import { Route } from "react-router-dom";
import OverTheRhine from "@/pages/neighborhoods/OverTheRhine";
import Downtown from "@/pages/neighborhoods/Downtown";
import HydePark from "@/pages/neighborhoods/HydePark";
import Oakley from "@/pages/neighborhoods/Oakley";
import MountAdams from "@/pages/neighborhoods/MountAdams";
import Clifton from "@/pages/neighborhoods/Clifton";
import WalnutHills from "@/pages/neighborhoods/WalnutHills";
import BlueAsh from "@/pages/neighborhoods/BlueAsh";
import Mason from "@/pages/neighborhoods/Mason";
import WestChester from "@/pages/neighborhoods/WestChester";

export const neighborhoodRoutes = (
  <>
    <Route path="/junk-removal-over-the-rhine" element={<OverTheRhine />} />
    <Route path="/junk-removal-downtown-cincinnati" element={<Downtown />} />
    <Route path="/junk-removal-hyde-park" element={<HydePark />} />
    <Route path="/junk-removal-oakley" element={<Oakley />} />
    <Route path="/junk-removal-mount-adams" element={<MountAdams />} />
    <Route path="/junk-removal-clifton" element={<Clifton />} />
    <Route path="/junk-removal-walnut-hills" element={<WalnutHills />} />
    <Route path="/junk-removal-blue-ash" element={<BlueAsh />} />
    <Route path="/junk-removal-mason" element={<Mason />} />
    <Route path="/junk-removal-west-chester" element={<WestChester />} />
  </>
);
