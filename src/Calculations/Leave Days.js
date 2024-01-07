const LeaveDays = (startDate, endDate) => 
{
    startDate=new Date(startDate)
    endDate=new Date(endDate)

    let dateDifference=(endDate-startDate) / (24 * 60 * 60 * 1000) + 1 
    
    let currentDate=startDate
    let datesArray=[]
    while (currentDate <= endDate)
    {
        datesArray.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
    }
        
    let saturdayCount=0
    let sundayCount=0

    datesArray.forEach(date =>
        {
            if(date.getDay()===0)
            {
                sundayCount+=1
            }
            else if(date.getDay()===6)
            {
                saturdayCount+=1
            }
         })

    dateDifference=dateDifference - (saturdayCount *0.5) - (sundayCount *1)
    return dateDifference
}
 
export default LeaveDays;