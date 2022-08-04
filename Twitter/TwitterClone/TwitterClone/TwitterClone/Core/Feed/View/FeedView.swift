//
//  FeedView.swift
//  TwitterClone
//
//  Created by SARTHAK JAIN on 7/22/22.
//

import SwiftUI

struct FeedView: View {
    var body: some View {
        ScrollView{
            LazyVStack{
                ForEach(0...20, id:\.self){_ in
                    TweetsRowView().padding()
                }
            }
        }
    }
}

struct FeedView_Previews: PreviewProvider {
    static var previews: some View {
        FeedView()
    }
}
