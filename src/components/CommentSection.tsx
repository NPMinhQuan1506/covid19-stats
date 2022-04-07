import { Divider, Typography, Box, TextField, Avatar, ButtonGroup, Button, Tabs, Tab } from "@mui/material";
import * as React from 'react';

export default function CommentSection() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Divider />
            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} padding={2}>Bình luận</Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center', flex: '1',
                    '& > :not(style)': { m: 1 },
                }}
            >
                <TextField style={{ width: '400px' }} id="demo-helper-text-misaligned-no-helper" label="Vui lòng nhập ý kiến của bạn" />
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Quan tâm nhất" />
                        <Tab label="Mới nhất" />
                    </Tabs>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Avatar style={{ marginRight: '16px' }} alt="Cong Lap" src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/157718068_262910932201969_2627293054864925413_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zpUVxuhqAmIAX9ik8j_&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_MAn--5VVhRUcLgXzpeoO7jwPUp5GSka7-S7XiOKCYGg&oe=62721CF7" />
                <p><span style={{ fontWeight: 'bold' }}> Công Lập </span>Hôm nay 27/3/2022 đã thấy ca nhiễm và ca tử vong giảm đều, hy vọng trong thời gian ngắn tình hình dịch bệnh ở VN sẽ sáng sủa hơn nhiều, như vậy mở cửa du lịch mới thu hút được du khách. Với lại VN yên tâm hơn là đã được phép sản xuất thuốc điều trị Molnupiravir và Paxlovid.</p>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Avatar style={{ marginRight: '16px' }} alt="Cong Lap" src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/157718068_262910932201969_2627293054864925413_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zpUVxuhqAmIAX9ik8j_&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_MAn--5VVhRUcLgXzpeoO7jwPUp5GSka7-S7XiOKCYGg&oe=62721CF7" />
                <p><span style={{ fontWeight: 'bold' }}> Đình Đô </span>Hôm nay 27/3/2022 đã thấy ca nhiễm và ca tử vong giảm đều, hy vọng trong thời gian ngắn tình hình dịch bệnh ở VN sẽ sáng sủa hơn nhiều, như vậy mở cửa du lịch mới thu hút được du khách. Với lại VN yên tâm hơn là đã được phép sản xuất thuốc điều trị Molnupiravir và Paxlovid.</p>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Avatar style={{ marginRight: '16px' }} alt="Ngan Dut" src="https://i.pinimg.com/564x/61/57/01/6157016e70824b5e4029735c495e860a.jpg" />
                <p><span style={{ fontWeight: 'bold' }}> NganDut </span>Hôm nay 27/3/2022 đã thấy ca nhiễm và ca tử vong giảm đều, hy vọng trong thời gian ngắn tình hình dịch bệnh ở VN sẽ sáng sủa hơn nhiều, như vậy mở cửa du lịch mới thu hút được du khách. Với lại VN yên tâm hơn là đã được phép sản xuất thuốc điều trị Molnupiravir và Paxlovid.</p>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Avatar style={{ marginRight: '16px' }} alt="Cong Lap" src="assets" />
                <p><span style={{ fontWeight: 'bold' }}> Cường </span>Hôm nay 27/3/2022 đã thấy ca nhiễm và ca tử vong giảm đều, hy vọng trong thời gian ngắn tình hình dịch bệnh ở VN sẽ sáng sủa hơn nhiều, như vậy mở cửa du lịch mới thu hút được du khách. Với lại VN yên tâm hơn là đã được phép sản xuất thuốc điều trị Molnupiravir và Paxlovid.</p>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Avatar style={{ marginRight: '16px' }} alt="Van Hien" src="" />
                <p><span style={{ fontWeight: 'bold' }}> Văn Hiển </span>Hôm nay 27/3/2022 đã thấy ca nhiễm và ca tử vong giảm đều, hy vọng trong thời gian ngắn tình hình dịch bệnh ở VN sẽ sáng sủa hơn nhiều, như vậy mở cửa du lịch mới thu hút được du khách. Với lại VN yên tâm hơn là đã được phép sản xuất thuốc điều trị Molnupiravir và Paxlovid.</p>
            </Box>
            <Divider />
        </>
    );
}
const buttons = [
    <Button key="new">Mới nhất</Button>,
    <Button key="focus">Quan Tâm</Button>,
];