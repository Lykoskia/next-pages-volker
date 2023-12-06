import { useRouter } from 'next/router';
import PageComponent from '@/components/PageComponent';
import { componentsStructure } from '@/utils/Data';

export default function Home() {
    const router = useRouter();
    const { locale } = router;
    console.log("index.js" + locale);

    const defaultPage = 'house';
    const defaultPageComponents = componentsStructure[defaultPage];

    return (
        <PageComponent
            page={defaultPage}
            locale={locale}
            componentNames={defaultPageComponents}
        />
    );
}
