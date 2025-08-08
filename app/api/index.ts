const API_LOGIN = "https://shippex-demo.bc.brandimic.com/api/method/login";
const API_SHIPMENT_STATUS = "https://shippex-demo.bc.brandimic.com/api/method/frappe.client.get_list"
const API_SHIPMENT = "https://shippex-demo.bc.brandimic.com/api/method/frappe.client.get_list";



import axios from "axios";

export const login = async (userName: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append('usr', userName);
    formData.append('pwd', password);

    const response = await axios.post(
      API_LOGIN,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        // timeout: 50000,
      }
    );

    console.log("Login response======>>>>>>>>", response.data);
    return response.data;
  } catch (error) {
    console.error("Login error ========>>>>>>>", error);
    throw error;
  }
};

export const getShipmentStatus = async (shipmentId: string) => {
    try {
        const response = await axios.post(API_SHIPMENT_STATUS, {
            doctype: "Shipment",
            filters: {
                name: shipmentId
            },
            fields: ["name", "status", "tracking_number"]
        });
        return response.data;
    } catch (error) {
        console.error("Get Shipment Status error:", error);
        throw error;
    }
}

export const getShipmentList = async (filters: object) => {
    try {
        const response = await axios.post(API_SHIPMENT, {
            doctype: "Shipment",
            filters: filters,
            fields: ["name", "status", "tracking_number"]
        });
        return response.data;
    } catch (error) {
        console.error("Get Shipment List error:", error);
        throw error;
    }
}