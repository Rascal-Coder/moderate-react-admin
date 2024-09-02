import { Button, Card } from "antd";
import { useTranslation } from "react-i18next";
import InfoCard from "src/components/infoCard";
import { ROUTE_ID } from "src/router";
import { appHelper, dpChain, routerHelper } from "src/service";
import { AddItemDrawerType } from "src/service/stores/ruleStore/model";
import MarketItemsTable from "../../components/marketItemTable";
import { EditViewProps } from "../editView";
import styles from "./index.module.scss";
import useDetailConfig from "./useDetailConfig";

const DetailView = ({ branchName, isSub, id }: EditViewProps) => {
	const { t: commonT } = useTranslation(["common"]);
	const items = useDetailConfig(branchName);

	return (
		<div className={styles.container}>
			<div className={styles.btnTable}>
				<Button
					onClick={async () => {
						if (isSub) {
							dpChain("ruleStore").setIsAddItemDrawerFlag({
								flag: true,
								type: AddItemDrawerType.market_edit,
								id: id!,
							});
						} else {
							debugger;
							routerHelper.jumpTo(ROUTE_ID.MarketEditPage, {
								search: {
									id,
								},
							});
						}
					}}
					style={{ marginRight: 10 }}
					type="primary"
				>
					{commonT`edit`}
				</Button>
				<Button
					onClick={() => {
						appHelper.closeTabByPath();
					}}
				>
					{commonT`cancel`}
				</Button>
			</div>
			<>
				<Card
					style={{
						marginBottom: "12px",
					}}
				>
					<InfoCard items={items}></InfoCard>
				</Card>
				<Card
					style={{
						marginBottom: "30px",
					}}
				>
					<MarketItemsTable
						branchName={branchName!}
					></MarketItemsTable>
				</Card>
			</>
		</div>
	);
};

export default DetailView;
