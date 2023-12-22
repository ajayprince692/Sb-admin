import React from 'react'
import Card from './Card'

function Dashboard() {
    let data=[
        {
        title:"EARNINGS (MONTHLY)",
        income:"$40,000",
        color:"primary",
        icon:"fas fa-calendar",
        isProgress:false
        },
        {
            title:"EARNINGS (ANNUAL)",
            income:"$2,15,000",
            color:"success",
            icon:"fas fa-dollar-sign",
            isProgress:false
            },
            {
                title:"TASKS",
                income:"10",
                color:"info",
                icon:"fas fa-clipboard-list",
                isProgress:true
                },
                {
                    title:"PENDING REQUESTS",
                    income:"18",
                    color:"warning",
                    icon:"fas fa-comments",
                    isProgress:false
                    },


]

  return  <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
     <div className="container-fluid">

<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
<div className="row">
    {
        data.map((e,i)=>{
            return <Card key={i} cardData={e} isProgress={e.isProgress} />
        }
    )
    }
   
</div>
</div>
</div>
</div>


}

export default Dashboard