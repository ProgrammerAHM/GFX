const nextConfig = {
    async rewrites() {
      return [
        {
            source: '/:service(ac|brake|electric|gearbox|suspension|transmission|comfort_system|Axle_&_Driveshaft|Body_and_repair_service|engine_control_unit|engine_cooling_system|engine_management_system|software|pre-purchase_inspection)',
            destination: '/Services',
        },
        {
            source: '/:service(AC_Services|Service_Packages|Electric_CWP|EWP_NewCars|EWP_PreOwnedCars|EWP_LuxuryCars)',
            destination: '/Packages',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  