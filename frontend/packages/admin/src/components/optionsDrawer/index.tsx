import type { DrawerProps } from "antd";
import { Button, Drawer, Space, theme } from "antd";
import React, { useState } from "react";
import { useFlat } from "src/service";
import SettingContent from "./content/index";
import { useTranslation } from "react-i18next";
const OptionsDrawer: React.FC = () => {
	const { saveSettingAct } = useFlat("devStore");
	const { isShowOptionsDrawer, setIsShowOptionsDrawer, settingData } =
		useFlat("appStore");
	const [placement] = useState<DrawerProps["placement"]>("right");
	const antdToken = theme.useToken();
	const { t } = useTranslation();
	const onClose = () => {
		setIsShowOptionsDrawer(false);
	};

	return (
		<>
			<Drawer
				title={t("app:setting")}
				placement={placement}
				width={500}
				onClose={onClose}
				open={isShowOptionsDrawer}
				style={{
					color: antdToken.token.colorText,
				}}
				
				destroyOnClose
				extra={
					<Space>
						<Button onClick={onClose}>{t("app:cancel")}</Button>
						<Button
							type="primary"
							onClick={() => {
								settingData && saveSettingAct(settingData);
								onClose();
							}}
						>
							{t("app:save")}
						</Button>
					</Space>
				}
			>
				<SettingContent />
			</Drawer>
		</>
	);
};

export default OptionsDrawer;
