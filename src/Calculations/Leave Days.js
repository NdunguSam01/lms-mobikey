const LeaveDays = (startDate, endDate, leaveType, leaveDuration) => 
{
    startDate=new Date(startDate)
    endDate=new Date(endDate)
    leaveType=leaveType.toLowerCase()
    leaveDuration=leaveDuration.toLowerCase()

    let dateDifference=(endDate-startDate) / (24 * 60 * 60 * 1000) + 1 
    
    if(leaveType === "maternity" || leaveType=== "paternity")
    {
            return dateDifference
    }
    else if (leaveType === "normal" || leaveType=== "sick")
    {
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
            
        if(leaveDuration === '')
        {
            dateDifference=0
        }
        else if (leaveDuration === "full")
        {
            dateDifference=dateDifference - (saturdayCount *0.5) - (sundayCount *1)
        }
        else if(leaveDuration === "half")
        {
            dateDifference=(dateDifference - (sundayCount *1))/2 
        }
            
        return dateDifference
    }
    else
    {
        return 0
    }
}
 
export default LeaveDays;