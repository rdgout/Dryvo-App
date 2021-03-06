import React from "react"
import { Text } from "react-native"
import renderer from "react-test-renderer"

import UserWithPic from "../../src/components/UserWithPic"

describe("UserWithPic", () => {
	test("view renders correctly", () => {
		const user = { image: "http://example.com" }
		const tree = renderer
			.create(
				<UserWithPic
					style={{ width: 100 }}
					width={100}
					height={100}
					imageContainerStyle={{ marginTop: 6 }}
					imageStyle={{ marginTop: 12 }}
					nameStyle={{ maxHeight: 30 }}
					extra={<Text>test</Text>}
					name="test"
					user={user}
				/>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
