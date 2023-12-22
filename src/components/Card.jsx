import React from 'react'

function Card({cardData,isProgress}) {
  return isProgress?<>
    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text-${cardData.color} text-uppercase mb-1`}>{cardData.title}
                    </div>
                    <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{cardData.income}%</div>
                        </div>
                        <div className="col">
                            <div className="progress progress-sm mr-2">
                                <div className={`progress-bar bg-info`} role="progressbar"
                                    style={{width: `${cardData.income}%`, ariaValuenow:`${cardData.income}`, ariaValuemin:"0",
                                    ariaValuemax:"100"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>
  </>:
  <>
  <div className="col-xl-3 col-md-6 mb-4">
    <div className={`card border-left-${cardData.color} shadow h-100 py-2`}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text-${cardData.color} text-uppercase mb-1`}>
                        {cardData.title}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{cardData.income}</div>
                </div>
                <div className="col-auto">
                    <i className={`fas ${cardData.icon} fa-2x text-gray-300`}></i>
                </div>
            </div>
        </div>
    </div>
</div>
  </>
  
}

export default Card