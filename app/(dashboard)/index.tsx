import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "expo-router";
import { scaledSize, STATUSES } from "../utils";
import {bell, logo, scan, filter, searchIcon, checkbox, checkbox1} from "@/assets/images/image-exports";
import ShipmentFilterSheet from "../components/ShipmentFilterSheet";
import RenderShipmentItem from "../components/RenderShipmentItem";

export default function DashboardPage() {
  const router = useRouter();
const [refreshing, setRefreshing] = useState(false);

const onRefresh = () => {
  setRefreshing(true);

  setTimeout(() => {
    setRefreshing(false);
  }, 1500);
};
  const [search, setSearch] = useState("");
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [allChecked, setAllChecked] = useState(false);

  const shipmentData = Array.from({ length: 11 }, (_, i) => ({
    id: i.toString(),
    awb: `41785691${423 + i}`,
    from: "Cairo",
    to: "Alexandria",
    status: STATUSES[i % STATUSES.length],
  }));

  const toggleCheckbox = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleMarkAll = () => {
    const newChecked: { [key: string]: boolean } = {};
    filteredShipments.forEach((item) => {
      newChecked[item.id] = !allChecked;
    });
    setCheckedItems((prev) => ({
      ...prev,
      ...newChecked,
    }));
    setAllChecked(!allChecked);
  };

  const filteredShipments = selectedFilters.length
    ? shipmentData.filter((item) => selectedFilters.includes(item.status))
    : shipmentData;

  return (
    <>
      <ShipmentFilterSheet
        visible={filterModalVisible}
        selected={selectedFilters}
        onClose={() => setFilterModalVisible(false)}
        onApply={(filters) => {
          setSelectedFilters(filters);
          setFilterModalVisible(false);
        }}
      />

      <Layout>
        <View style={{ padding: 2, flex: 1, backgroundColor: "#ffffff" }}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 16,
            }}
          >
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Image source={logo} style={{ width: 24, height: 24 }} />
              <Text
                style={{ fontSize: 18, fontWeight: "700", color: "#2F50C1" }}
              >
                SHIPPEX
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#F4F2F8",
                borderRadius: 20,
                padding: 8,
              }}
            >
              <Image source={bell} style={{ width: 20, height: 20 }} />
            </View>
          </View>

          <View style={{ marginBottom: scaledSize(16) }}>
            <Text style={{ color: "#8E8E8E", fontSize: 14 }}>Hello,</Text>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#000" }}>
              Suleiman Ajah
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#F4F2F8",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: scaledSize(10),
              paddingHorizontal: 12,
              height: scaledSize(48),
              marginBottom: 26,
            }}
          >
            <Image
              source={searchIcon}
              style={{ width: 18, height: 18, marginRight: 10 }}
            />
            <TextInput
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
              style={{ flex: 1 }}
            />
          </View>

          <View style={{ flexDirection: "row", gap: 12, marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => setFilterModalVisible(true)}
              style={{
                flex: 1,
                backgroundColor: "#F4F2F8",
                padding: 14,
                borderRadius: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={filter}
                style={{ width: 24, height: 24, marginRight: 8 }}
              />
              <Text style={{ color: "#2F50C1", fontWeight: "600" }}>
                Filters
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#2F50C1",
                padding: 14,
                borderRadius: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={scan}
                style={{ width: 24, height: 24, marginRight: 8 }}
              />
              <Text style={{ color: "#fff", fontWeight: "600" }}>Add Scan</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 12,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Shipments</Text>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              onPress={toggleMarkAll}
            >
              <Image source={checkbox} style={{ width: 20, height: 20 }} />
              <Text style={{ color: "#2F50C1", fontWeight: "500" }}>
                {allChecked ? "Unmark All" : "Mark All"}
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredShipments}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <RenderShipmentItem
                item={item}
                checked={checkedItems[item.id]}
                onToggle={() => toggleCheckbox(item.id)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 50 }}
              refreshing={refreshing}        
              onRefresh={onRefresh} 
          />
        </View>
      </Layout>
    </>
  );
}
