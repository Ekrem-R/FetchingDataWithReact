import React from 'react';

const Fish = (props) => {

    return (
        <div className="row">

            {
                props
                    .fish
                    .map((fish) => (
                        
                        <div className="card-body">
                            <h3 style={{ color: 'green' }}>Fish Farm</h3>
                            <p className="text">
                                <b>Fish Type:</b>{fish.fishType}</p>
                            <p className="text">
                                <b>Price:</b>{fish.price}</p>
                            <p className="text">
                                <b>Duration in Days:</b>{fish.entryDate.toLocaleDateString()}</p>
                            <p className="text">
                                <b>Duration in Days:</b>{fish.durationInDays}</p>
                            <p className="text">
                                <b>Duration in Days:</b>Item Weights:{fish.itemWeightInGrams}</p>
                            <p className="text">
                                <b>Country:</b>{fish.originCountry}</p>
                            <p className="text">
                                <b>Season:</b>{fish.season}</p>
                            <p className="text">
                                <b>Stock Volume:</b>{fish.stockVolumeInKg}</p>
                            <p className="text">
                                <b>Sale Location:</b>{fish.saleLocations.toString()}</p>
                        </div>
                    ))
            }
        </div>
    )

}
export default Fish;