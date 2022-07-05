import React, { useContext, useEffect } from "react";

export enum DeviceType {
    MOBILE, DESKTOP,
}

export const DeviceTypeContext = React.createContext<DeviceType>(DeviceType.DESKTOP)

export function useDeviceType() {
    const deviceContext = useContext(DeviceTypeContext)
    return deviceContext
}