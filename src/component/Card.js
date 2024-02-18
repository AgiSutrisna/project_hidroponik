import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Apple from "../img/apple.png";
import Selada from "../img/selada.png";
import Pupuk from "../img/pupuk.png";
import Timun from "../img/timun.png";
import Seledri from "../img/seledri.png";
import Tomat from "../img/tomat.png";
import BawangDaun from "../img/bawang_daun.png";
import BawangMerah from "../img/bawang_merah.png";
import Cabe from "../img/cabe.png";
import Terong from "../img/terong.png";

function ProductCard({ nama, harga, img }) {
  return (
    <Card className="w-full mt-2 bg-[#F5F7F8]">
      <CardHeader shadow={false} floated={false} className="self-center bg-[#F5F7F8]">
        <img className="object-cover w-16 h-16" src={img} alt={nama} />
      </CardHeader>
      <CardBody className="p-0">
        <div className="flex flex-col items-center justify-between">
          <Typography color="blue-gray" className="font-normal text-xs">
            {nama}
          </Typography>
          <Typography color="blue-gray" className="font-normal text-xs">
            Rp. {harga}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="p-2">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Beli
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProductList() {
  const products = [
    { nama: "Timun", harga: 5000, img: Timun },
    { nama: "Selada", harga: 3000, img: Selada },
    { nama: "Tomat", harga: 7000, img: Tomat },
    { nama: "Seledri", harga: 4000, img: Seledri },
    { nama: "Bawang Daun", harga: 4000, img: BawangDaun },
    { nama: "Bawang Merah", harga: 4000, img: BawangMerah },
    { nama: "Terong", harga: 4000, img: Terong },
    { nama: "Cabe", harga: 4000, img: Cabe },
    { nama: "Apel", harga: 4000, img: Apple },
    { nama: "Pupuk Kandang", harga: 4000, img: Pupuk },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product, index) => (
        <ProductCard key={index} nama={product.nama} harga={product.harga} img={product.img} />
      ))}
    </div>
  );
}

export default ProductList;