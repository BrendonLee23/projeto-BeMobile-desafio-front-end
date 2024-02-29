import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; 

const formatDate = (dateString: string) => {
    return dayjs(dateString).format('DD/MM/YYYY');
};

export default formatDate;
