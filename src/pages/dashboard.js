import PageLayout from "@/components/pageLayout"



import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

import { useEffect, useState } from "react"


  
export default function Dashboard() {
    
    
    // const [balance, setBalance] = useState(null);

    // useEffect(() => {
    //     fetchBalance().then((data) => {
    //         setBalance(data.result);
    //     });
    // }, []);

    return (
        <PageLayout>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold"> Dashboard </h1>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by Chain" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {/* {balance && balance.assets ? (
                <div className="py-4">
                    <h1 className="text-lg font-semibold"> Total Balance: $ {balance.totalBalanceUsd} </h1>
                    <Table>
                        <TableCaption>A list of your tokens.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[300px]">Name</TableHead>
                            <TableHead>Current Price</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-right">  Balance </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {balance.assets.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium flex items-center">
                                        <Avatar className="mr-2">
                                            <AvatarImage src={item.thumbnail} alt={item.tokenName} />
                                            <AvatarFallback>Token</AvatarFallback>
                                        </Avatar>
                                        {item.tokenName}
                                        <span className="ml-2"> ({item.tokenSymbol}) </span>
                                    </TableCell>
                                    <TableCell> {item.tokenPrice}</TableCell>
                                    <TableCell> {item.balance} </TableCell>
                                    <TableCell className="text-right"> {item.balanceUsd} </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ) : (
                <p> Loading... </p>
            )} */}
        </PageLayout>
    )
}


//import { AnkrProvider } from "@ankr.com/ankr.js"

// const fetchBalance = async () => {
//     const options = {
//         method: 'POST',
//         headers: {
//             'accept': 'application/json',
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             jsonrpc: '2.0',
//             method: 'ankr_getAccountBalance',
//             params: {
//             nativeFirst: false,
//             onlyWhitelisted: true,
//             walletAddress: '0x8F7261A46abE7Df64b37516DE5F016CD2F63e899'
//             },
//             id: 1
//         })
//     }; 
//     try {
//         const response = await fetch('https://rpc.ankr.com/multichain/79258ce7f7ee046decc3b5292a24eb4bf7c910d7e39b691384c7ce0cfb839a01/?ankr_getAccountBalance=', options);
//         const data  = await response.json();
//         return data;
       
//     }
//     catch (error) {
//         console.error(error);
//     }
// } ;