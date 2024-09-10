interface Booking {
  id: string;
  roomId: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  customerName: string;
  email: string;
  status: string;
  engPack: boolean;
  engId: string | null;
}
