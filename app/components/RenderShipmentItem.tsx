import { View, TouchableOpacity, Image, Text } from "react-native";
import {whatsappIcon, callIcon, box, ArrowBlue, arrow, checkbox, checkbox1} from "@/assets/images/image-exports";

import { scaledSize } from "../utils";
import { useState } from "react";

type ShipmentItemProps = {
  item: {
    id: string;
    awb: string;
    from: string;
    to: string;
    status: string;
    originAddress?: string;
    destinationAddress?: string;
  };
  checked: boolean;
  onToggle: () => void;
};

const RenderShipmentItem = ({ item, checked, onToggle }: ShipmentItemProps) => {
  const [expand, setExpand] = useState(false);

const statusColors: { [key: string]: string } = {
  DELIVERED: "#D1FADF",
  RECEIVED: "#D1FADF",
  ERROR: "#FFE4E6",
  REJECTED: "#FFE4E6",
  PENDING: "#E3ECFF",
  CANCELED: "#FFE4E6"
};

const statusTextColors: { [key: string]: string } = {
  DELIVERED: "#027A48",
  RECEIVED: "#027A48",
  ERROR: "#B42318",
  REJECTED: "#B42318",
  CANCELED: "#B42318",
  PENDING: "#2F50C1"
};


  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F4F2F8",
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: checked ? 1 : 0,
        borderColor: checked ? "#2F50C1" : "transparent",
        padding: 12
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onToggle} style={{ marginRight: 12 }}>
          <Image
            source={checked ? checkbox1 : checkbox}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>

        <Image source={box} style={{ width: 40, height: 40, marginRight: 12 }} />

        <View style={{ flex: 1 }}>
          <Text style={{ color: "#6B5EAE", fontWeight: "500" }}>AWB</Text>
          <Text style={{ fontWeight: "700", fontSize: 16 }}>{item.awb}</Text>
          <Text style={{ fontSize: 12 }}>
            {item.from} <Text style={{ color: "#2F50C1" }}>→</Text> {item.to}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: "center",  }}>
          <View
            style={{
              backgroundColor: statusColors[item.status] || "#E3ECFF",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 12,
              marginBottom: 6
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: statusTextColors[item.status] || "#2F50C1",
                fontWeight: "600"
              }}
            >
              {item.status}
            </Text>
          </View>

 <TouchableOpacity
  onPress={() => setExpand(!expand)}
  style={[
    {
      width: scaledSize(20),
      height: scaledSize(20),
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 5,
      backgroundColor: expand ? "" : "#ffffff",
    }
  ]}
>
  {expand? (

    <Image source={ArrowBlue} style={{ width: 22, height: 22 }} />
  ) : (

    <Image source={arrow} style={{ width: 12, height: 12 }} />
  )}
</TouchableOpacity>

        </View>
      </View>

      {expand && (
        <View style={{ marginTop: 16 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ color: "#6B5EAE", fontWeight: "600" }}>Origin</Text>
              <Text style={{ fontWeight: "700", fontSize: 14 }}>{item.from}</Text>
              <Text style={{ fontSize: 12, color: "#667085" }}>
                {item.originAddress || "Dokki, 22 Nile St."}
              </Text>
            </View>

            <View>
              <Text style={{ color: "#6B5EAE", fontWeight: "600" }}>Destination</Text>
              <Text style={{ fontWeight: "700", fontSize: 14 }}>{item.to}</Text>
              <Text style={{ fontSize: 12, color: "#667085" }}>
                {item.destinationAddress || "Smoha, 22 max St."}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 12, marginTop: 16 }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "#2F50C1",
                borderRadius: 12,
                flex: 1,
                justifyContent: "center"
              }}
            >
              <Image source={callIcon} style={{ width: 16, height: 16, marginRight: 6 }} />
              <Text style={{ color: "white", fontWeight: "600" }}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "#25D366",
                borderRadius: 12,
                flex: 1,
                justifyContent: "center"
              }}
            >
              <Image source={whatsappIcon} style={{ width: 16, height: 16, marginRight: 6 }} />
              <Text style={{ color: "white", fontWeight: "600" }}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default RenderShipmentItem;
