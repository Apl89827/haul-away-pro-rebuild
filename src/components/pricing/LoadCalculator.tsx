
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const LoadCalculator = () => {
  const [items, setItems] = useState({
    furniture: 0,
    appliances: 0,
    boxes: 0,
    electronics: 0,
    mattresses: 0,
    miscellaneous: 0
  });

  const itemCategories = [
    { key: 'furniture', name: 'Furniture Pieces', truckSpace: 8 },
    { key: 'appliances', name: 'Large Appliances', truckSpace: 12 },
    { key: 'boxes', name: 'Boxes/Bags', truckSpace: 2 },
    { key: 'electronics', name: 'Electronics', truckSpace: 4 },
    { key: 'mattresses', name: 'Mattresses', truckSpace: 6 },
    { key: 'miscellaneous', name: 'Miscellaneous Items', truckSpace: 3 }
  ];

  const updateItem = (key: string, change: number) => {
    setItems(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + change)
    }));
  };

  const totalSpace = Object.entries(items).reduce((total, [key, count]) => {
    const category = itemCategories.find(cat => cat.key === key);
    return total + (count * (category?.truckSpace || 0));
  }, 0);

  const getTruckSize = () => {
    if (totalSpace === 0) return "No items selected";
    if (totalSpace <= 10) return "Minimum Load";
    if (totalSpace <= 12.5) return "1/8 Truck Load";
    if (totalSpace <= 25) return "1/4 Truck Load";
    if (totalSpace <= 37.5) return "3/8 Truck Load";
    if (totalSpace <= 50) return "1/2 Truck Load";
    if (totalSpace <= 62.5) return "5/8 Truck Load";
    if (totalSpace <= 75) return "3/4 Truck Load";
    if (totalSpace <= 87.5) return "7/8 Truck Load";
    return "Full Truck Load";
  };

  const getEstimatedPrice = () => {
    const truckSize = getTruckSize();
    if (truckSize === "No items selected") return "Select items to see estimate";
    if (truckSize === "Minimum Load") return "$99";
    if (truckSize === "1/8 Truck Load") return "$200";
    if (truckSize === "1/4 Truck Load") return "$300";
    if (truckSize === "3/8 Truck Load") return "$400";
    if (truckSize === "1/2 Truck Load") return "$450";
    if (truckSize === "5/8 Truck Load") return "$500";
    if (truckSize === "3/4 Truck Load") return "$550";
    if (truckSize === "7/8 Truck Load") return "$600";
    return "$650";
  };

  const resetCalculator = () => {
    setItems({
      furniture: 0,
      appliances: 0,
      boxes: 0,
      electronics: 0,
      mattresses: 0,
      miscellaneous: 0
    });
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Calculator className="h-12 w-12 text-brand-blue mx-auto mb-4" />
          <h2 className="heading-lg mb-4 text-brand-darkBlue">Load Calculator</h2>
          <p className="text-lg text-gray-600">
            Get an instant estimate by selecting your items. Our calculator helps you 
            understand which truck size you'll need.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Items Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-darkBlue">Select Your Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {itemCategories.map((category) => (
                    <div key={category.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium">{category.name}</span>
                        <div className="text-sm text-gray-500">
                          {category.truckSpace}% truck space each
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItem(category.key, -1)}
                          disabled={items[category.key] === 0}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {items[category.key]}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItem(category.key, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={resetCalculator}
                >
                  Reset Calculator
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-brand-lightBlue border-brand-blue">
              <CardHeader>
                <CardTitle className="text-brand-darkBlue">Your Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-blue mb-2">
                      {getTruckSize()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {totalSpace}% truck space needed
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-lg font-semibold text-gray-800 mb-1">
                      Estimated Price
                    </div>
                    <div className="text-2xl font-bold text-brand-green">
                      {getEstimatedPrice()}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 bg-white p-3 rounded">
                    <strong>Includes:</strong> Labor, transportation, disposal, cleanup, and all fees
                  </div>

                  <div className="space-y-3 pt-4">
                    <Link to="/booking">
                      <Button className="w-full btn-primary">
                        Get Free On-Site Estimate
                      </Button>
                    </Link>
                    <a href="tel:5137128077">
                      <Button variant="outline" className="w-full">
                        Call (513) 712-8077
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This is an estimate only. Final pricing is determined on-site 
              based on actual volume and item types. Some items may have additional disposal fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadCalculator;
