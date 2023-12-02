import "../App.css";
import { useState, useEffect } from "react";
import TableComp from "./TableKtp";
import {
  Select,
  Flex,
  Text,
  Dialog,
  Button,
  TextField,
} from "@radix-ui/themes";
import { datas } from "../data/dataKtp";
import { sortByNIMAscending, sortByNIMDescending } from "../rumusSorting/rumus";

function CrudKtp() {
  const [allData, setAllData] = useState(datas);
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [fakultas, setFakultas] = useState("");

  useEffect(() => {}, [allData]);

  const handleSelectChange = (selectedValue) => {
    console.log("Before", allData);
    if (selectedValue === "ascending") {
      const sortedData = sortByNIMAscending(allData);
      setAllData(sortedData);
    } else if (selectedValue === "descending") {
      const sortedData = sortByNIMDescending(allData);
      setAllData(sortedData);
    } else {
      setAllData(datas);
    }
    console.log("after", allData);
    return;
  };

  const tambahData = () => {
    const inputedData = {
      nama: name,
      nim: nim,
      fakultas: fakultas,
    };
    const updatedData = [...allData, inputedData];
    setAllData(updatedData);
    return;
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-center text-3xl">
        {" "}
        DATA <span className="text-orange-500">KTP</span>
      </h1>
      <div className="flex items-center justify-center mt-4">
        <Select.Root
          defaultValue="default"
          onValueChange={(event) => handleSelectChange(event)}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Sorting</Select.Label>
              <Select.Item value="default">Default</Select.Item>
              <Select.Item value="ascending">Ascending</Select.Item>
              <Select.Item value="descending">Descending</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
      <div className="mt-5 lg:p-5">
        {/* Tabel */}
        <TableComp datas={allData} />

        <div className="mt-5">
          <Dialog.Root>
            {/* Trigger untuk dialog */}
            <Dialog.Trigger>
              <Button>Tambah Data</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
              <Dialog.Title>Tambah</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Tambah Data KTP
              </Dialog.Description>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Nama Panjang
                  </Text>
                  <TextField.Input
                    placeholder="Masukan Nama Panjang"
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    NIK
                  </Text>
                  <TextField.Input
                    placeholder="Masukan NIK"
                    onChange={(event) => setNim(event.target.value)}
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Alamat
                  </Text>
                  <TextField.Input
                    placeholder="Masukan Alamat"
                    onChange={(event) => setFakultas(event.target.value)}
                  />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Batalkan
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button onClick={tambahData}>Simpan</Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
}

export default CrudKtp;
