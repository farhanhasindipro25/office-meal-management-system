export function generateScheduleOptions(data) {
  const options = data?.map((item) => {
    const label = item.working_day;
    const value = item.id.toString();

    return {
      id: item.id,
      working_day: item.working_day,
      start_date: item.start_date,
      end_date: item.end_date,
      label: label,
      value: value,
    };
  });

  return options || [];
}
