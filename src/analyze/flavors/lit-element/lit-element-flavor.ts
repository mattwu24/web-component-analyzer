import { AnalyzerFlavor } from "../analyzer-flavor";
import { discoverDefinitions } from "./discover-definitions";
import { discoverMembers } from "./discover-members";
import { excludeNode } from "./exclude-node";

export class LitElementFlavor implements AnalyzerFlavor {
	excludeNode = excludeNode;

	discoverDefinitions = discoverDefinitions;

	discoverFeatures = {
		member: discoverMembers
	};
}