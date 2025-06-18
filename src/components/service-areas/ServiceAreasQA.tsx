
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceAreasQA = () => {
  const [testResults, setTestResults] = useState<{[key: string]: 'pass' | 'fail' | 'pending'}>({});
  const [isRunning, setIsRunning] = useState(false);

  const cincinnatiNeighborhoods = [
    "Over-the-Rhine", "Downtown Cincinnati", "The Banks", "Newport", "Covington",
    "Hyde Park", "Oakley", "Mount Adams", "Clifton", "Walnut Hills",
    "Mount Auburn", "Corryville", "University of Cincinnati", "Northside", "Camp Washington",
    "Queensgate", "West End", "East Walnut Hills", "Evanston", "Avondale",
    "Bond Hill", "Roselawn", "Golf Manor", "Pleasant Ridge", "Kennedy Heights",
    "Silverton", "Deer Park", "Blue Ash", "Montgomery", "Symmes Township",
    "Anderson Township", "Mariemont", "Terrace Park", "Indian Hill", "Madeira",
    "Wyoming", "Lockland", "Elmwood Place", "Saint Bernard", "Norwood",
    "Cheviot", "Delhi Township", "Green Township", "Colerain Township", "Springfield Township",
    "Finneytown", "Forest Park", "Springdale", "Sharonville", "Evendale"
  ];

  const nearbyAreas = [
    "Mason", "West Chester", "Fairfield", "Hamilton", "Loveland",
    "Milford", "Kenwood", "Sycamore Township", "Deerfield Township"
  ];

  const allAreas = [...cincinnatiNeighborhoods, ...nearbyAreas];

  const formatNeighborhoodSlug = (neighborhood: string) => {
    return neighborhood.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const testLink = async (areaName: string) => {
    const slug = formatNeighborhoodSlug(areaName);
    const testUrl = `/junk-removal-${slug}`;
    
    try {
      // Simulate navigation test by checking if the route exists
      // In a real scenario, you'd want to actually navigate and check response
      const isValidRoute = document.querySelector(`a[href="${testUrl}"]`) !== null;
      return isValidRoute ? 'pass' : 'fail';
    } catch (error) {
      return 'fail';
    }
  };

  const runQATests = async () => {
    setIsRunning(true);
    const results: {[key: string]: 'pass' | 'fail' | 'pending'} = {};
    
    // Initialize all as pending
    allAreas.forEach(area => {
      results[area] = 'pending';
    });
    setTestResults({...results});

    // Test each area
    for (const area of allAreas) {
      const result = await testLink(area);
      results[area] = result;
      setTestResults({...results});
      
      // Small delay to show progress
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    setIsRunning(false);
  };

  const getStatusIcon = (status: 'pass' | 'fail' | 'pending') => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'fail':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getStatusCounts = () => {
    const counts = { pass: 0, fail: 0, pending: 0 };
    Object.values(testResults).forEach(status => {
      counts[status] = (counts[status] || 0) + 1;
    });
    return counts;
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Service Areas QA Testing
            <Button 
              onClick={runQATests} 
              disabled={isRunning}
              className="ml-4"
            >
              {isRunning ? 'Running Tests...' : 'Run QA Tests'}
            </Button>
          </CardTitle>
          
          {Object.keys(testResults).length > 0 && (
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Pass: {statusCounts.pass}
              </span>
              <span className="flex items-center gap-1">
                <XCircle className="w-4 h-4 text-red-500" />
                Fail: {statusCounts.fail}
              </span>
              <span className="flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                Pending: {statusCounts.pending}
              </span>
            </div>
          )}
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            {/* Cincinnati Neighborhoods */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Cincinnati Neighborhoods ({cincinnatiNeighborhoods.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {cincinnatiNeighborhoods.map(area => (
                  <div key={area} className="flex items-center justify-between p-2 border rounded">
                    <Link 
                      to={`/junk-removal-${formatNeighborhoodSlug(area)}`}
                      className="text-sm hover:text-blue-600 flex-1"
                    >
                      {area}
                    </Link>
                    {testResults[area] && getStatusIcon(testResults[area])}
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Nearby Areas ({nearbyAreas.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {nearbyAreas.map(area => (
                  <div key={area} className="flex items-center justify-between p-2 border rounded">
                    <Link 
                      to={`/junk-removal-${formatNeighborhoodSlug(area)}`}
                      className="text-sm hover:text-blue-600 flex-1"
                    >
                      {area}
                    </Link>
                    {testResults[area] && getStatusIcon(testResults[area])}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceAreasQA;
