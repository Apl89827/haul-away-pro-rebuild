
import { Route } from "react-router-dom";

// Phase 1 Service pages
import FurnitureJunkRemoval from "@/pages/services/FurnitureJunkRemoval";
import ApplianceRemoval from "@/pages/services/ApplianceRemoval";
import ElectronicWasteRemoval from "@/pages/services/ElectronicWasteRemoval";
import OutdoorItemRemoval from "@/pages/services/OutdoorItemRemoval";
import ConstructionDebrisRemoval from "@/pages/services/ConstructionDebrisRemoval";
import EstateCleanoutServices from "@/pages/services/EstateCleanoutServices";

// Phase 2 Secondary Category Pages
import ResidentialJunkRemovalCincinnati from "@/pages/services/ResidentialJunkRemovalCincinnati";
import CommercialJunkRemovalCincinnati from "@/pages/services/CommercialJunkRemovalCincinnati";
import EstateCleanoutServicesCincinnati from "@/pages/services/EstateCleanoutServicesCincinnati";
import LightDemolitionServicesCincinnati from "@/pages/services/LightDemolitionServicesCincinnati";
import ApplianceFurnitureRemovalCincinnati from "@/pages/services/ApplianceFurnitureRemovalCincinnati";

// Phase 3 Specific Service Pages
import CouchSofaRemovalCincinnati from "@/pages/services/CouchSofaRemovalCincinnati";
import MattressRemovalCincinnati from "@/pages/services/MattressRemovalCincinnati";
import RefrigeratorDisposalCincinnati from "@/pages/services/RefrigeratorDisposalCincinnati";
import WasherDryerRemovalCincinnati from "@/pages/services/WasherDryerRemovalCincinnati";
import TelevisionRemovalCincinnati from "@/pages/services/TelevisionRemovalCincinnati";
import DeskOfficeFurnitureRemovalCincinnati from "@/pages/services/DeskOfficeFurnitureRemovalCincinnati";
import DiningRoomSetRemovalCincinnati from "@/pages/services/DiningRoomSetRemovalCincinnati";
import ExerciseEquipmentRemovalCincinnati from "@/pages/services/ExerciseEquipmentRemovalCincinnati";
import HotTubRemovalCincinnati from "@/pages/services/HotTubRemovalCincinnati";
import PianoRemovalCincinnati from "@/pages/services/PianoRemovalCincinnati";
import BedFrameRemovalCincinnati from "@/pages/services/BedFrameRemovalCincinnati";
import BookshelfRemovalCincinnati from "@/pages/services/BookshelfRemovalCincinnati";
import WardrobeRemovalCincinnati from "@/pages/services/WardrobeRemovalCincinnati";
import CabinetRemovalCincinnati from "@/pages/services/CabinetRemovalCincinnati";
import PoolTableRemovalCincinnati from "@/pages/services/PoolTableRemovalCincinnati";

// Phase 3 Appliance & Furniture Service Pages
import RefrigeratorRemovalCincinnati from "@/pages/services/RefrigeratorRemovalCincinnati";
import MattressBoxSpringRemovalCincinnati from "@/pages/services/MattressBoxSpringRemovalCincinnati";
import LargeFurnitureRemovalCincinnati from "@/pages/services/LargeFurnitureRemovalCincinnati";

// Additional Appliance Service Pages
import DishwasherRemovalCincinnati from "@/pages/services/DishwasherRemovalCincinnati";
import StoveOvenRemovalCincinnati from "@/pages/services/StoveOvenRemovalCincinnati";
import WaterHeaterRemovalCincinnati from "@/pages/services/WaterHeaterRemovalCincinnati";
import AirConditionerRemovalCincinnati from "@/pages/services/AirConditionerRemovalCincinnati";

// Phase 3 Commercial Service Pages
import OfficeFurnitureRemovalCincinnati from "@/pages/services/OfficeFurnitureRemovalCincinnati";
import RetailFixtureRemovalCincinnati from "@/pages/services/RetailFixtureRemovalCincinnati";
import RestaurantEquipmentDisposalCincinnati from "@/pages/services/RestaurantEquipmentDisposalCincinnati";
import ConstructionDebrisRemovalCincinnati from "@/pages/services/ConstructionDebrisRemovalCincinnati";
import WarehouseCleanoutCincinnati from "@/pages/services/WarehouseCleanoutCincinnati";

// Phase 3 Estate Cleanout Service Pages
import FullEstateCleanoutCincinnati from "@/pages/services/FullEstateCleanoutCincinnati";
import ProbatePropertyCleanoutCincinnati from "@/pages/services/ProbatePropertyCleanoutCincinnati";
import HoardingCleanoutCincinnati from "@/pages/services/HoardingCleanoutCincinnati";
import DeceasedFamilyCleanoutCincinnati from "@/pages/services/DeceasedFamilyCleanoutCincinnati";
import EstateSaleCleanupCincinnati from "@/pages/services/EstateSaleCleanupCincinnati";

// Phase 3 Light Demolition Service Pages
import InteriorWallRemovalCincinnati from "@/pages/services/InteriorWallRemovalCincinnati";
import DeckDemolitionCincinnati from "@/pages/services/DeckDemolitionCincinnati";
import ShedRemovalCincinnati from "@/pages/services/ShedRemovalCincinnati";
import FenceRemovalCincinnati from "@/pages/services/FenceRemovalCincinnati";
import SmallStructureDemolitionCincinnati from "@/pages/services/SmallStructureDemolitionCincinnati";

export const serviceRoutes = (
  <>
    {/* Service category pages */}
    <Route path="/services/furniture-junk-removal" element={<FurnitureJunkRemoval />} />
    <Route path="/services/appliance-removal" element={<ApplianceRemoval />} />
    <Route path="/services/electronic-waste-removal" element={<ElectronicWasteRemoval />} />
    <Route path="/services/outdoor-item-removal" element={<OutdoorItemRemoval />} />
    <Route path="/services/construction-debris-removal" element={<ConstructionDebrisRemoval />} />
    <Route path="/services/estate-cleanout-services" element={<EstateCleanoutServices />} />
    
    {/* Secondary category pages for Phase 2 SEO strategy */}
    <Route path="/residential-junk-removal-cincinnati" element={<ResidentialJunkRemovalCincinnati />} />
    <Route path="/commercial-junk-removal-cincinnati" element={<CommercialJunkRemovalCincinnati />} />
    <Route path="/estate-cleanout-services-cincinnati" element={<EstateCleanoutServicesCincinnati />} />
    <Route path="/light-demolition-services-cincinnati" element={<LightDemolitionServicesCincinnati />} />
    <Route path="/appliance-furniture-removal-cincinnati" element={<ApplianceFurnitureRemovalCincinnati />} />
    
    {/* Phase 3 Specific Service Pages */}
    <Route path="/couch-sofa-removal-cincinnati" element={<CouchSofaRemovalCincinnati />} />
    <Route path="/mattress-removal-cincinnati" element={<MattressRemovalCincinnati />} />
    <Route path="/refrigerator-disposal-cincinnati" element={<RefrigeratorDisposalCincinnati />} />
    <Route path="/washer-dryer-removal-cincinnati" element={<WasherDryerRemovalCincinnati />} />
    <Route path="/television-removal-cincinnati" element={<TelevisionRemovalCincinnati />} />
    <Route path="/desk-office-furniture-removal-cincinnati" element={<DeskOfficeFurnitureRemovalCincinnati />} />
    <Route path="/dining-room-set-removal-cincinnati" element={<DiningRoomSetRemovalCincinnati />} />
    <Route path="/exercise-equipment-removal-cincinnati" element={<ExerciseEquipmentRemovalCincinnati />} />
    <Route path="/hot-tub-removal-cincinnati" element={<HotTubRemovalCincinnati />} />
    <Route path="/piano-removal-cincinnati" element={<PianoRemovalCincinnati />} />
    <Route path="/bed-frame-removal-cincinnati" element={<BedFrameRemovalCincinnati />} />
    <Route path="/bookshelf-removal-cincinnati" element={<BookshelfRemovalCincinnati />} />
    <Route path="/wardrobe-removal-cincinnati" element={<WardrobeRemovalCincinnati />} />
    <Route path="/cabinet-removal-cincinnati" element={<CabinetRemovalCincinnati />} />
    <Route path="/pool-table-removal-cincinnati" element={<PoolTableRemovalCincinnati />} />
    
    {/* Phase 3 Appliance & Furniture Service Pages */}
    <Route path="/refrigerator-removal-cincinnati" element={<RefrigeratorRemovalCincinnati />} />
    <Route path="/mattress-box-spring-removal-cincinnati" element={<MattressBoxSpringRemovalCincinnati />} />
    <Route path="/large-furniture-removal-cincinnati" element={<LargeFurnitureRemovalCincinnati />} />
    
    {/* Additional Appliance Service Pages */}
    <Route path="/dishwasher-removal-cincinnati" element={<DishwasherRemovalCincinnati />} />
    <Route path="/stove-oven-removal-cincinnati" element={<StoveOvenRemovalCincinnati />} />
    <Route path="/water-heater-removal-cincinnati" element={<WaterHeaterRemovalCincinnati />} />
    <Route path="/air-conditioner-removal-cincinnati" element={<AirConditionerRemovalCincinnati />} />
    
    {/* Phase 3 Commercial Service Pages */}
    <Route path="/office-furniture-removal-cincinnati" element={<OfficeFurnitureRemovalCincinnati />} />
    <Route path="/retail-fixture-removal-cincinnati" element={<RetailFixtureRemovalCincinnati />} />
    <Route path="/restaurant-equipment-disposal-cincinnati" element={<RestaurantEquipmentDisposalCincinnati />} />
    <Route path="/construction-debris-removal-cincinnati" element={<ConstructionDebrisRemovalCincinnati />} />
    <Route path="/warehouse-cleanout-cincinnati" element={<WarehouseCleanoutCincinnati />} />
    
    {/* Phase 3 Estate Cleanout Service Pages */}
    <Route path="/full-estate-cleanout-cincinnati" element={<FullEstateCleanoutCincinnati />} />
    <Route path="/probate-property-cleanout-cincinnati" element={<ProbatePropertyCleanoutCincinnati />} />
    <Route path="/hoarding-cleanout-cincinnati" element={<HoardingCleanoutCincinnati />} />
    <Route path="/deceased-family-cleanout-cincinnati" element={<DeceasedFamilyCleanoutCincinnati />} />
    <Route path="/estate-sale-cleanup-cincinnati" element={<EstateSaleCleanupCincinnati />} />
    
    {/* Phase 3 Light Demolition Service Pages */}
    <Route path="/interior-wall-removal-cincinnati" element={<InteriorWallRemovalCincinnati />} />
    <Route path="/deck-demolition-cincinnati" element={<DeckDemolitionCincinnati />} />
    <Route path="/shed-removal-cincinnati" element={<ShedRemovalCincinnati />} />
    <Route path="/fence-removal-cincinnati" element={<FenceRemovalCincinnati />} />
    <Route path="/small-structure-demolition-cincinnati" element={<SmallStructureDemolitionCincinnati />} />
  </>
);
