import { DataGridPremium } from '@mui/x-data-grid-premium'

export default function Home() {
    return (
        <DataGridPremium
            columns={[
                {
                    field: 'id',
                    headerName: 'ID',
                },
            ]}
        />
    )
}
