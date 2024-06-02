import KeepAliveOutlet from "src/common/hocs/keepAlive/keepAliveOutlet";
import themeProviderHoc from "src/common/hocs/themeHoc/themeHoc";
import { useIsMobile } from "src/common/hooks";
import layoutMap from "src/layouts";
import { MobileDefault } from "src/layouts/mobileDefault";
import { useFlat } from "src/service";

const HomePage = () => {
	const { settingData, currentTheme } = useFlat("appStore");
	const layoutName =
		currentTheme == "dark"
			? settingData?.layoutSet?.dark
			: settingData?.layoutSet?.light;
	const Layout =
		layoutMap[layoutName as keyof typeof layoutMap] ||
		(layoutMap.Default as any);
	const isMobile = useIsMobile();
	if (isMobile) {
		return (
			<MobileDefault>
				<KeepAliveOutlet />
			</MobileDefault>
		);
	}
	return (
		<Layout>
			<KeepAliveOutlet />
		</Layout>
	);
};

export default themeProviderHoc(HomePage, {});
