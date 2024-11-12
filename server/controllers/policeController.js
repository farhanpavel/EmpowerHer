import prisma from "../db.js";
import bcrypt from "bcrypt";
export const policeGet = async (req, res) => {
  const Data = await prisma.police.findMany({});
  res.status(200).json(Data);
};
export const policeGetById = async (req, res) => {
  const Data = await prisma.police.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(Data);
};
export const policePut = async (req, res) => {
  const { name, email, mobile, thana } = req.body;
  const Data = await prisma.police.update({
    where: {
      id: req.params.id,
    },
    data: {
      name,
      email,
      mobile,
      thana,
    },
  });
  res.status(200).json(Data);
};

export const policeDelete = async (req, res) => {
  const Data = await prisma.police.delete({
    where: {
      id: req.params.id,
    },
  });
  const Data2 = await prisma.user.delete({
    where: {
      user_id: req.params.id,
    },
  });
  res.status(200).json({ Data, Data2 });
};
