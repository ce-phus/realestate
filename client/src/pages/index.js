import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllProperties } from "../actions/propertiesActions";
import Property from "../components/Property";

export default function Home() {
  const dispatch = useDispatch();

  const listAllPropertiesReducer = useSelector((state) => state.listAllPropertiesReducer);
  const { loading, error, properties } = listAllPropertiesReducer;

  useEffect(() => {
    dispatch(listAllProperties());
  }, [dispatch]);

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>Hello</h2>
        <Link href={'/profile'}>
          <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
            <span className="px-2"></span>
          </div>
        </Link>
      </div>
      <div className="mt-4 overflow-hidden">
        <h2 className="text-xl mb-4">Property Listings</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property) => (
              <div key={property.id} className="flex flex-col">
                <Property property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
