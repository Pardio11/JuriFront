import type { paymentGateway,recentTrans  } from '@/types/components/dashboard/ecommerceDashboard';
import file from "/images/svgs/file.svg";
import file2 from "/images/svgs/file-type-pdf.svg";
import file3 from "/images/svgs/file-text.svg";
import icon4 from "/images/svgs/icon-pie.svg";

/*--Payment gateways--*/
const paymentGateways : paymentGateway[] = [
    {
        img: file,
        title:'Acta de nacimiento',
        subtitle:'Big Brands',
        rank:'+$6,235',
        disable:'',
        bgcolor:"primary",
      },
      {
        img: file,
        title:'CURP',
        subtitle:'Bill payment',
        rank:'-$345',
        disable:'emphasis',
        bgcolor:"success",
      },
      {
        img: file,
        title:'RFC',
        subtitle:'Money reversed',
        rank:'+$2,235',
        disable:'',
        bgcolor:"warning",
      },
      {
        img: file2,
        title:'Acta de Matrimonio',
        subtitle:'Bill Payment',
        rank:'-$32',
        disable:'emphasis',
        bgcolor:"error",
      },
      {
        img: file,
        title:'Carta Poder',
        subtitle:'Money reversed',
        rank:'+$2,235',
        disable:'',
        bgcolor:"warning",
      },
      {
        img: file3,
        title:'Demanda',
        subtitle:'Big Brands',
        rank:'+$6,235',
        disable:'',
        bgcolor:"primary",
      },
      
];

/*--Recent Transaction--*/
const recentTransaction  : recentTrans[] = [
    {
        title:'09:30 am',
        subtitle:'Payment received from John Doe of $385.90',
        textcolor:'primary',
        boldtext:false,
        line:true,
        link:'',
        url:''
      },
      {
        title:'10:00 am',
        subtitle:'New sale recorded',
        textcolor:'secondary',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'12:00 am',
        subtitle:'Payment was made of $64.95 to Michael',
        textcolor:'success',
        boldtext:false,
        line:true,
        link:'',
        url:''
      },
      {
        title:'09:30 am',
        subtitle:'New sale recorded',
        textcolor:'warning',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'09:30 am',
        subtitle:'New arrival recorded',
        textcolor:'error',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'12:00 am',
        subtitle:'Payment Done',
        textcolor:'success',
        boldtext:false,
        line:false,
        link:'',
        url:''
      },
]

export{paymentGateways,recentTransaction}